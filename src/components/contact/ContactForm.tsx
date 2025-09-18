import React from "react";
import Card from "@/ui/Card";
import TextArea from "@/ui/TextArea";
import { Send, Calendar } from "lucide-react";
import { serviceOptions } from "@/utils/serviceOptions";
import { timeOptions } from "@/utils/timeOptions";

import ContactField from "./ContactField";
import ContactSelect from "./ContactSelect";
import ContactSuccess from "./ContactSuccess";
import { useContactForm } from "./useContactForm";

const ContactForm: React.FC = () => {
    const {
        formData,
        isSubmitting,
        isSubmitted,
        handleInputChange,
        handleSubmit,
    } = useContactForm();

    if (isSubmitted) return <ContactSuccess />;

    return (
        <Card className="shadow-xl border-0 fade-in-up">
            <div className="pb-8">
                <div className="text-2xl font-bold text-primary flex items-center">
                    <Calendar className="w-6 h-6 mr-3 text-accent" />
                    Schedule Your Consultation
                </div>
                <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid md:grid-cols-2 gap-6">
                    <ContactField
                        label="First Name *"
                        value={formData.firstName}
                        onChange={(val) => handleInputChange("firstName", val)}
                        required
                    />
                    <ContactField
                        label="Last Name *"
                        value={formData.lastName}
                        onChange={(val) => handleInputChange("lastName", val)}
                        required
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <ContactField
                        label="Email Address *"
                        type="email"
                        value={formData.email}
                        onChange={(val) => handleInputChange("email", val)}
                        required
                    />
                    <ContactField
                        label="Phone Number *"
                        type="tel"
                        value={formData.phone}
                        onChange={(val) => handleInputChange("phone", val)}
                        required
                    />
                </div>

                {/* Service */}
                <ContactSelect
                    label="Type of Service *"
                    options={serviceOptions}
                    value={formData.serviceType}
                    onChange={(val) => handleInputChange("serviceType", val)}
                />

                {/* Date & Time */}
                <div className="grid md:grid-cols-2 gap-6">
                    <ContactField
                        label="Preferred Date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(val) => handleInputChange("preferredDate", val)}
                        min={new Date().toISOString().split("T")[0]}
                    />
                    <ContactSelect
                        label="Preferred Time"
                        options={timeOptions}
                        value={formData.preferredTime}
                        onChange={(val) => handleInputChange("preferredTime", val)}
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Information
                    </label>
                    <TextArea
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please describe your symptoms or concerns..."
                        className="h-32 resize-none"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-opacity-90 text-white py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center"
                >
                    {isSubmitting ? (
                        <span className="flex items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Processing Request...
                        </span>
                    ) : (
                        <span className="flex items-center">
                            <Send className="w-5 h-5 mr-3" />
                            Schedule Consultation
                        </span>
                    )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of
                    service.
                </p>
            </form>
        </Card>
    );
};

export default ContactForm;
