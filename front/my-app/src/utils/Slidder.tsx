import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Slidder: React.FunctionComponent = () => {
    return ( 
        <div className='mt-9 mb-5 w-full'>
            <Slider min={0} defaultValue={0} max={10} marks={{ 0: "0km", 5: "5km", 10: "10km" }} step={5} />
        </div>
     );
}
 
export default Slidder;