import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form"
interface IForm {
  department: string;
  why: string;
  salary: string;
  introdution: string;
  dreams: string;
  email: string;
}
export default function Home() {
  const [result, setResult] = useState<IForm>();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IForm>({
    mode: "onBlur"
  });

  const onValid = (data: IForm) => {
    setResult(data);
  }
  const onInvalid = (error: FieldErrors) => {
  }
  return (
    <div className="border-2 border-r-8 border-b-8 border-black bg-pink-200 rounded-2xl w-full max-w-xs px-4 py-5 my-10 mx-auto flex flex-col justify-center space-y-5 text-xs">
      <h1 className="text-xl font-semibold text-center">
        Job Application Form
      </h1>
      <form onSubmit={handleSubmit(onValid, onInvalid)} className="space-y-2">
        <div>
          <div className="font-medium mb-2">What department do you want to work for?
            <div className="text-red-500">
              {errors.department?.message}
            </div>
          </div>
          <div className="space-y-1">
            <div className="space-x-1">
              <input
                {...register("department", {
                  required: "*required"
                })}
                type="radio" name="department" id="department1" value={"Sales"} />
              <label htmlFor="department1">Sales</label>
            </div>
            <div className="space-x-1">
              <input
                {...register("department", {
                  required: "*required"
                })}
                type="radio" name="department" id="department2" value={"Marketing"} />
              <label htmlFor="department2">Marketing</label>
            </div>
            <div className="space-x-1">
              <input
                {...register("department", {
                  required: "*required"
                })}
                type="radio" name="department" id="department3" value={"Accounting"} />
              <label htmlFor="department3">Accounting</label>
            </div>
            <div className="space-x-1">
              <input
                {...register("department", {
                  required: "*required"
                })}
                type="radio" name="department" id="department4" value={"Customer Service"} />
              <label htmlFor="department4">Customer Service</label>
            </div>
          </div>
        </div>
        <div>
          <div className="font-medium mb-2">Why do you want to join this company?
            <div className="text-red-500">
              {errors.why?.message}
            </div>
          </div>
          <div>
            <div className="space-x-1">
              <input
                {...register("why", {
                  required: "*required"
                })}
                type="radio" name="why" id="why1" value={"money"} />
              <label htmlFor="why1">I want money!</label>
            </div>
            <div className="space-x-1">
              <input
                {...register("why", {
                  required: "*required"
                })}
                type="radio" name="why" id="why2" value={"love"} />
              <label htmlFor="why2">I love this company</label>
            </div>
            <div className="space-x-1">
              <input
                {...register("why", {
                  required: "*required"
                })}
                type="radio" name="why" id="why3" value={"learn"} />
              <label htmlFor="why3">I want to learn</label>
            </div>
            <div className="space-x-1">
              <input
                {...register("why", {
                  required: "*required"
                })}
                type="radio" name="why" id="why4" value={"I don't know"} />
              <label htmlFor="why4">I don't know why</label>
            </div>
          </div>
        </div>
        <div>
          <div className="font-medium mb-1">Salary</div>
          <select
            {...register("salary")}
            className="border-2 border-black w-full rounded-md px-2 py-1"
            name="salary" id="salary"
          >
            <option value="$50K">$50K</option>
            <option value="$100K">$100K</option>
            <option value="$150K">$150K</option>
            <option value="$200K">$200K</option>
          </select>
        </div>
        <div>
          <div className="font-medium mb-1">Introduce yourself</div>
          <input
            {...register("introdution", {
              required: "Please write down your introduction"
            })}
            type="text" name="introdution" id="introdution" required
            className="w-full px-2 py-1 rounded-md border-2 border-black invalid:border-red-500 valid:border-black "
          />
          <div className="text-red-500">
            {errors.introdution?.message}
          </div>
        </div>
        <div>
          <div className="font-medium mb-1">Tell us what your dreams are</div>
          <textarea
            {...register("dreams", {
              required: "Please tell us what your dreams are.",
              minLength: {
                message: "please write more than 10 characters.",
                value: 10
              }
            })}
            name="dreams" id="dreams" cols={30} rows={5} required minLength={10}
            className="border-2 border-black px-2 py-1 w-full rounded-md invalid:border-red-500 valid:border-black">

          </textarea>
          <div className="text-red-500">
            {errors.dreams?.message}
          </div>
        </div>
        <div>
          <div className="font-medium mb-1">Email</div>
          <input
            {...register("email", {
              required: "Please write down your email.",
              validate: {
                onlyNaver: (value) => value.includes("@naver.com") || "Only @naver allowed"
              }
            })}
            type="text" name="email" id="email" required
            className="border-2 border-black px-2 py-1 w-full rounded-md invalid:border-red-500 valid:border-black" />
          <div className="text-red-500">
            {errors.email?.message}
          </div>
        </div>
        <div>
          <input type="submit" value="Giv me this job"
            className="border-2 border-r-4 border-b-4 w-full rounded-md border-black bg-yellow-300" />
        </div>
      </form>
      <div className="break-all">{JSON.stringify(result)}</div>
    </div>
  )
}
