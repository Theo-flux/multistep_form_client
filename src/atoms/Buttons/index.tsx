interface IButtonProps {
  type?: 'submit' | 'reset' | 'button';
  text: string;
  variant: 'filled' | 'transparent' | 'outlined';
  css?: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  type,
  text,
  variant,
  css,
  onClick,
  disabled,
  isLoading,
  leftIcon,
  rightIcon
}: IButtonProps) => {
  return (
    <button
      className={`flex h-[45px] w-[100px] items-center justify-center rounded-lg border text-sm font-medium ${
        variant === 'filled' && 'border-none bg-denim text-white hover:bg-purple'
      } ${variant === 'transparent' && 'bg-tansparent text-grey hover:text-denim border-none'} ${
        variant === 'outlined' && 'border-borderLine text-black hover:border-primary border'
      } transition-all duration-150 ease-in-out disabled:cursor-not-allowed disabled:opacity-50 ${css}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? (
        <>loading</>
      ) : (
        <>
          {leftIcon}
          <p className={`${leftIcon && 'ml-2'} ${rightIcon && 'mr-2'}`}>{text}</p>
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;
