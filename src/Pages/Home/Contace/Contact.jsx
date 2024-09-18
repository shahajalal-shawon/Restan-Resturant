import contactImg from '../../../assets/burger.png'
const Contact = () => {
    return (
      <div className="flex justify-center items-center gap-10 mt-32 mb-32">
        <div className="bg-orange-700 h-[330px] w-[400px] p-8 space-y-3">
          <h1 className="text-2xl font-bold">Find Food Lounge</h1>
          <p>25BS, Split Avenue 5896 Frankfurt</p>
          <p>+(310) 2591 21563</p>
          <p>help-delish@gmail.com</p>
          <div className='pt-5'>
            <p>Mon - Thu: 10 AM - 02 AM</p>
            <p>Fri - Sun: 10 AM - 02 AM</p>
          </div>
        </div>
        <div>
          <img className='h-[330px]' src={contactImg} alt="" />
        </div>
        <div className='bg-black h-[330px] w-[400px] p-8 space-y-3'>
          <h1 className='text-2xl font-bold mb-10'>Contact Us Now</h1>
          <p className='font-medium pb-4'>
            Sus nisi platea primis dignissim quam cras netus natoque vel
            senectus, quis fames praesent sapien...
          </p>
          <button className='btn btn-outline hover:bg-orange-700'>Book a Table</button>
        </div>
      </div>
    );
};

export default Contact;