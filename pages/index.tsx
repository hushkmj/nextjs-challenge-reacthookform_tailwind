export default function Home() {
  return (
    <div className="border-2 border-black bg-pink-300 rounded-xl w-full max-w-xs px-6 py-5 my-10 mx-auto flex flex-col items-center space-y-5">
      <h1>Job Application Form</h1>
      <form className="space-y-2">
        <div>
          <div>What department do you want to work for?</div>
          <div>
            <div>
              <input type="radio" name="want1" id="want1_1" />
              <label htmlFor="want1_1">Sales</label>
            </div>
            <div>
              <input type="radio" name="want1" id="want1_2" />
              <label htmlFor="want1_2">Marketing</label>
            </div>
            <div>
              <input type="radio" name="want1" id="want1_3" />
              <label htmlFor="want1_3">Accounting</label>
            </div>
            <div>
              <input type="radio" name="want1" id="want1_4" />
              <label htmlFor="want1_4">Customer Service</label>
            </div>
          </div>
        </div>
        <div>
          <div>Why do you want to join this company?</div>
          <div>
            <div>
              <input type="radio" name="want2" id="want2_1" />
              <label htmlFor="want2_1">I want money!</label>
            </div>
            <div>
              <input type="radio" name="want2" id="want2_2" />
              <label htmlFor="want2_2">I love this company</label>
            </div>
            <div>
              <input type="radio" name="want2" id="want2_3" />
              <label htmlFor="want2_3">I want to learn</label>
            </div>
            <div>
              <input type="radio" name="want2" id="want2_4" />
              <label htmlFor="want2_4">I don't know why</label>
            </div>
          </div>
        </div>
        <div>
          <div>Salary</div>
          <select name="" id="" className="border w-full rounded-md">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div>
          <div>Intoduce yourself</div>
          <input type="text" name="" id="" className="border w-full rounded-md" />
        </div>
        <div>
          <div>Tell us what your dreams are</div>
          <textarea name="" id="" cols={30} rows={5} className="border w-full rounded-md"></textarea>
        </div>
        <div>
          <div>Email</div>
          <input type="text" name="" id="" className="border w-full rounded-md" />
        </div>
        <div>
          <input type="submit" value="Giv me this job" className="border-2 w-full rounded-md border-black bg-yellow-300" />
        </div>
      </form>
    </div>
  )
}
