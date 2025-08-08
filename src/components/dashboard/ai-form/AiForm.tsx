"use client";

import ActionButton from "@/components/ui/ActionButton";
import { useClientProfileStore } from "@/store/useProfileStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
const AiForm = () => {
  const profile = useClientProfileStore((s) => s.profile);
  const { setProfile } = useClientProfileStore();

  const [questions, setQuestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasTried, setHasTried] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const router = useRouter();
  if (!profile?.petName) {
    return (
      <div className="text-gray-500 italic">
        Please add a pet profile first to get AI suggestions.
      </div>
    );
  }

  const getAiForm = async () => {
    if (!profile) return;
    setLoading(true);
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);

    try {
      const response = await fetch("/api/ai-form", {
        method: "POST",
        body: JSON.stringify({ profile }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      const list = data.result?.split("\n").filter(Boolean) || [];
      setQuestions(list);
    } catch (error) {
      console.error("Failed to fetch AI", error);
      alert("Sorry, we have a tech problem");
    } finally {
      setLoading(false);
      setHasTried(true);
    }
  };

  const handleAnswerChange = (questionIndex: number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: value,
    }));
  };

  const nextQuestion = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const prevQuestion = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const saveAnswers = async () => {
    try {
      const response = await fetch("/api/ai-save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questions,
          answers,
          petName: profile.petName,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        console.error("Save error:", data);
        alert("Save failed: " + (data.error || "Unknown error"));
        return;
      }
      setProfile({
        ...profile,
        aiFormCompleted: true,
      });
    } catch (e) {
      console.error("Error saving answers:", e);
      alert("Something went wrong");
    }
  };

  const restartForm = () => {
    setQuestions([]);
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  return (
    <div className="bg-white min-h-40 max-w-120 min-w-80 rounded-2xl border-2 border-white p-4 shadow md:min-w-120">
      {questions.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-6">
          <span className="text-fluid-sm">
            We have some more question about {profile.petName} to make sitting
            even more comfortable!
          </span>
          <ActionButton onClick={getAiForm}>
            {loading ? "Thinking..." : "Start"}
          </ActionButton>
        </div>
      )}

      {questions.length > 0 && !isCompleted && (
        <div className="space-y-4">
          <div className="rounded-lg bg-white p-4 shadow-inner">
            <h3 className="mb-3 text-base font-medium text-gray-800">
              {questions[currentStep]}
            </h3>

            <textarea
              value={answers[currentStep] || ""}
              onChange={(e) => handleAnswerChange(currentStep, e.target.value)}
              placeholder="Your answer..."
              className="focus:ring-primary-pink-500 w-full resize-none rounded-lg border border-gray-200 p-3 focus:border-transparent focus:ring-2 focus:outline-none"
              rows={3}
            />
          </div>

          <div className="flex items-center justify-between">
            <ActionButton
              onClick={prevQuestion}
              className="min-h-10 min-w-20 rounded-full border-b-4 border-gray-500 bg-gray-100 px-4 font-bold shadow-2xl transition-all duration-100 hover:brightness-105 active:translate-y-0.5 active:border-b-2"
            >
              Previous
            </ActionButton>
            {currentStep < questions.length - 1 ? (
              <ActionButton onClick={nextQuestion}>Next</ActionButton>
            ) : (
              <ActionButton onClick={nextQuestion}>Complete</ActionButton>
            )}
          </div>
        </div>
      )}

      {isCompleted && (
        <div className="space-y-4">
          <div className="py-4 text-center">
            <div className="mb-2 text-2xl">🎉</div>
            <h2 className="mb-2 text-lg font-semibold text-gray-800">
              Great job! You've completed all questions.
            </h2>
            <p className="text-sm text-gray-600">
              Here's a summary of your answers for {profile.petName}:
            </p>
          </div>

          <div className="max-h-60 space-y-3 overflow-y-auto">
            {questions.map((question, index) => (
              <div key={index} className="rounded-xl bg-white p-3 shadow-inner">
                <div className="mb-1 text-xs font-medium text-gray-500">
                  {index + 1}:
                </div>
                <div className="mb-2 text-sm text-gray-800">{question}</div>
                <div className="rounded bg-gray-50 p-2 text-sm text-gray-600 italic">
                  {answers[index] || "No answer provided"}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <ActionButton onClick={saveAnswers}>Save</ActionButton>
            <ActionButton
              onClick={restartForm}
              className="h-10 min-w-25 rounded-full border-b-4 border-gray-500 bg-gray-100 font-bold shadow-2xl transition-all duration-100 hover:brightness-105 active:translate-y-0.5 active:border-b-2"
            >
              Start Over
            </ActionButton>
          </div>
        </div>
      )}

      {!loading && hasTried && questions.length === 0 && (
        <p className="mt-4 text-sm text-gray-400">No suggestions generated</p>
      )}
    </div>
  );
};

export default AiForm;
