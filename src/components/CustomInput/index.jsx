const InputField = ({ label, id, name, type = "text", onChange, value, placeholder, register }) => {
    return(
        <div className="w-[300px] h-[60px] gap-[5px] flex flex-col">
			<label htmlFor={id} className='block font-semibold font-Inter text-[12px]'>
				{label}
			</label>
			<input
				className=' h-[40px] px-[20px] text-[12px] font-Inter w-full border-[0.5px] rounded-[10px] text-headercolor focus:border-gray-200 focus:outline-none focus:ring-0 focus:ring-offset-1 focus:ring-gray-300 transition-colors duration-300'
				id={id}
				type={type}
				name={name}
				{...register(name,{ required: `${name} is required `})}
				value={value}
				onChange={onChange}
                placeholder={placeholder}
			/>
		</div>
    )
};
export default InputField;