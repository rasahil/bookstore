/* eslint-disable react/no-unescaped-entities */
import { RxCross1 } from "react-icons/rx";
import { Select, Option ,Button  } from "@material-tailwind/react";

const BookSellForm = () => {
  return (
    <div>
      <div className="lg:p-[60px] p-[30px] ">
      {/* heading */}
      <div className="pb-6">
        <h2 className="text-center lg:p-4  lg:text-[28px] md:text-[24px] text-[18px]">
          BooksShare - Sellers Form{" "}
          <span className="lg:text-[32px] text-[20px] float-right ">
            {" "}
            <RxCross1  />
          </span>
        </h2>
      </div>

      {/* form */}

      <div className=''>
        <form
          action=""
          className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3"
        >
          <div className="lg:text-[24px] text-[20px]">
            <label htmlFor="">
              First Name <span className="text-[red]">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-black rounded ps-2 "
            />
          </div>

          <div className="lg:text-[24px] text-[20px]">
            <label htmlFor="">
              Last Name <span className="text-[red]">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-black rounded ps-2 "
            />
          </div>
          <div className="lg:text-[24px] text-[20px]">
            <label htmlFor="">
              Email id <span className="text-[red]">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-black rounded ps-2 "
            />
          </div>

          <div className="lg:text-[24px] text-[20px]">
            <label htmlFor="">
              Mobile Number <span className="text-[red]">* </span>
            </label>
            <input
              type="text"
              className="w-full border border-black rounded ps-2 "
            />
          </div>

          <div className="lg:text-[24px] text-[20px]">
            <label htmlFor="" className="">
              Full Address <span className="text-[red]">*</span>
            </label>
            <textarea name="" id=""  rows="3" className="w-full border border-black rounded ps-2"></textarea>
          </div>
          <div className=" grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-3 lg:text-[24px] text-[20px]">
            <span>
              <label htmlFor="">Pin Code :- </label><br />
              <input type="text" maxLength={6} className="w-72 mt-2 border border-black rounded ps-2" />
            </span>
            <span>
              <label htmlFor="">City in Maharashtra <span className="text-[red]">*</span></label>
              <div className="flex w-72 flex-col gap-6" >
                <Select className="  border rounded ">
                  <Option>Nagpur  </Option>
                  <Option>Wardha </Option>
                  <Option>Yavatmad </Option>
                  <Option>Nashik </Option>
                  <Option>Amaravti </Option>
                </Select>
              </div>
            </span>
          </div>
        </form>
      </div>

      {/* address */}
      <div className="lg:text-[24px] text-[16px] md:text-[20px] py-3 text-[Inter] ">
      You can Courier the books to us At :- G-5 Anand Rajani, Apartment IT park pin Code : 440022 
OthorWise our Courier boys will reached to your Address and pickup the Books.
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:ms-[150px]">
        <div className="lg:text-[24px] text-[20px] ">
          <label htmlFor="">Image of Book's</label><br />
          <input type="file" className="w-72 " />

        </div> <div className="lg:text-[24px] text-[20px] ">
          <label htmlFor="">Enter No. of Book's</label><br />
          <input type="number" className="w-52 border border-black rounded ps-2 " />

        </div>
      </div>

      <div className='py-6'>
        <label htmlFor="" className='font-bold lg:text-[24px] text-[20px]'>Price of Book's</label><br />
        <input type="checkbox" color='black' className='' /><span> Price Will be 50 % off for Every Book</span>
      </div>
      <div>
        <center className="py-6">
       <Button color="green" className="bg-[#81A356] font-normal px-4 py-2 lg:text-[18px] text-[14px]">Submit</Button>

        </center>
      </div>
    </div>
    </div>
  )
}

export default BookSellForm
