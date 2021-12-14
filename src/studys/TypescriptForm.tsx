import React, { useState } from "react";

export const TypescriptForm = () => {
  const [value, setValue] = useState("");
  // onchange 함수가 HTML의 input요소에서 발생할 것을 알려줌
  // onChange onInput onInvalid onReset onSubmit는 FormEvent
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // reactJS 에서는 target을 currentTarget으로 이용하게 함
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  // form의 경우 또한 어떤 요소에서 발생하는지 정의해 준다
  // reactjs 의 이벤트 최적화 => SyntheticEvent(모든 브라우저에서 이벤트를 동일하게 처리하기 위한 이벤트 래퍼)
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
};
