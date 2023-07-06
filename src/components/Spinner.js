import './Spinner.css'

function Spinner (){
    return(
        <div className='flex flex-col items-center space-y-2'>
           <div class="spinner"></div>

            <p className='text-purple-600 text-lg font-semibold' >Loading</p>
        </div>
    )
}

export default Spinner