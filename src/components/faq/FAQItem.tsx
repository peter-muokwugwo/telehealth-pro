import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Card from "@/ui/Card";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
    delay?: number;
}

export default function FAQItem({
    question,
    answer,
    isOpen,
    onToggle,
    delay = 0,
}: FAQItemProps) {
    return (
        <Card
            className="shadow-lg border-0 fade-in-up"
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="p-0">
                <button
                    onClick={onToggle}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-lg"
                >
                    <h3 className="text-lg font-semibold text-primary pr-4">
                        {question}
                    </h3>
                    {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                    ) : (
                        <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                    )}
                </button>

                {isOpen && (
                    <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{answer}</p>
                    </div>
                )}
            </div>
        </Card>
    );
}
