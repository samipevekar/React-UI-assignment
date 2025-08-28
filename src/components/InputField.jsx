// src/components/InputField.jsx
function InputField({ label, type = "text", placeholder, value, onChange, required = false, name }) {
  return (
    <div className="mb-7 relative">
      <div className="relative border border-gray-300 rounded-md focus-within:border-[#6C25FF] focus-within:ring-1 focus-within:ring-[#6C25FF]">
        <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-[#6C25FF] font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          type={type}
          className="w-full px-3 py-2 border-0 bg-transparent focus:outline-none focus:ring-0"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          name={name}
        />
      </div>
    </div>
  )
}

export default InputField;