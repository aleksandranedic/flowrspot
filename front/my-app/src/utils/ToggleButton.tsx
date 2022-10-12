
const ToggleButton: React.FunctionComponent = () => {
    return ( 
        <label className="flex flex-wrap relative justify-center cursor-pointer w-11">
                    <input type="checkbox" value="" id="default-toggle" className="sr-only peer"/>
                    <div className="w-full h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-pointer dark:peer-focus:bg-primary-light rounded-full peer border border-gray-200 dark:bg-secondary-background peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-primary-text after:border-gray-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-200 peer-checked:bg-primary-light">
                    </div>
                    <p className="float-left text-sm mr-2 font-medium font-Ubuntu text-secondary-title peer-checked:opacity-50"> off </p>
                    <p className="float-right text-sm font-medium font-Ubuntu text-secondary-title opacity-50 peer-checked:opacity-100"> on</p>
        </label>
     );
}
 
export default ToggleButton;