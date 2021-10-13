import React, { useRef, useState } from "react";

interface Props {
  onChange: (value: string) => void;
  label: string;
  valid?: () => boolean;  // option
}

export const Input = ({ label, onChange, valid }: Props) => {
  const [isInValid, setIsInValid] = useState(false);

  const reference = useRef<HTMLDivElement | null>(null); 

  const onBlur = () => {
    if (valid !== undefined) {
        setIsInValid(!valid());
    } 
  }

  return (
    <div ref={reference} onBlur={onBlur}>
      <span>{label}</span>
      <input type="text" onChange={(event) => onChange(event.target.value)} />
      {isInValid && <p>Dane nie są poprawne</p>}  
    </div>
  );
};


