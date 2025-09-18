import type React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {

}


const TextArea: React.FC<TextAreaProps> = ({ className, ...props }) => {
  return (
    <textarea
        className={`w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 ${className ?? ""}`}
        rows={4}
        {...props}
     />
  )
}

export default TextArea