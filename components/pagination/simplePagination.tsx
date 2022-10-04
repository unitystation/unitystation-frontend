interface SimplePaginationProps {
    enablePrev: boolean;
    enableNext: boolean;
    onPrevClicked: () => void;
    onNextClicked: () => void;
}

const SimplePagination = (props: SimplePaginationProps) => {
    const {enablePrev, enableNext, onPrevClicked, onNextClicked} = props;

    const determineClass = (enabled: boolean) => {
        if (enabled) {
            return 'inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
        }
        return 'inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l opacity-50 cursor-not-allowed';
    }


    return (<div className={'flex flex-col items-center'}>
        <div className={'inline-flex mt-2 xs:mt-0'}>

            <button
                disabled={!enablePrev}
                onClick={onPrevClicked}
                className={determineClass(enablePrev)}>
                <svg aria-hidden="true" className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                          clipRule="evenodd"></path>
                </svg>
                Prev
            </button>

            <button
                disabled={!enableNext}
                onClick={onNextClicked}
                className={determineClass(enableNext)}>
                Next
                <svg aria-hidden="true" className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"></path>
                </svg>
            </button>


        </div>
    </div>);
}

export default SimplePagination;
