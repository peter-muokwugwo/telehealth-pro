import React from "react";
import { Calendar } from "lucide-react";
import Card from "@/ui/Card";

const ContactSuccess: React.FC = () => (
    <Card className="shadow-xl border-0 fade-in-up">
        <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">
                Thank You for Your Request!
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
                We've received your consultation request and will contact you within 24
                hours to confirm your appointment and provide next steps.
            </p>
            <p className="text-sm text-gray-500">
                Check your email for a confirmation message with important details.
            </p>
        </div>
    </Card>
);

export default ContactSuccess;
