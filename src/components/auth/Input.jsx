export default function Input({ icon = null, placeholder = "", type = "", value, func, isRequired = false }) {
    return (
        <div className="flex items-center w-full border border-gray-400 p-2 rounded-md mt-3">
            {icon}
            <input
                className="w-full outline-none ml-2"
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={(e) => func(e.target.value)}
                required={isRequired}
            />
        </div>
    );
}