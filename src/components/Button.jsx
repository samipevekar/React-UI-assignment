// src/components/Button.jsx
function Button({ children, onClick, type = "button", variant = "primary", className = "" }) {
  const baseClasses = "w-full py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variants = {
    primary: "bg-[#6C25FF] text-white hover:bg-[#5c1fe0] focus:ring-[#6C25FF]",
    outline: "border border-[#6C25FF] text-[#6C25FF] hover:bg-[#f0ebff] focus:ring-[#6C25FF]",
    secondary: "bg-[#CBCBCB] text-black hover:bg-[#b5b5b5] focus:ring-[#CBCBCB]"
  }
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button