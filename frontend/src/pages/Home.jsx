import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getNFTsETH, getNfts } from '../features/covalent/covalentSlice';
import Spinner from '../components/layout/spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { useMetaMask } from 'metamask-react';
import Metamask from '../components/Metamask';
function Home() {
	const { nfts, address, isLoading, isSuccess } = useSelector(
		(state) => state.covalent
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { status } = useMetaMask();

	useEffect(() => {
		if (isSuccess) {
			dispatch(getNfts());
		}
		if (address !== null) {
			dispatch(getNFTsETH(address));
		}
		if(nfts !== null){
			navigate('/gallery')
		}
	}, [isSuccess, address, nfts]);

	if (isLoading) {
		return <Spinner />;
	}


	return <>
	<div> <div class="container mx-auto">
    <div class="flex flex-row flex-wrap py-4">
        <aside class="w-full sm:w-1/3 md:w-1/4 px-2">
            <div class="sticky top-0 p-4 w-full">
                <ul class="flex flex-col overflow-hidden">
                    
                </ul>
            </div>
        </aside>
        <main role="main" class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
	

        </main>
    </div>
</div>
		</div>
	{/* {nfts !== null && navigate('/gallery')} */}
	{status === 'unavailable' && <Metamask />}
	</>;
}

export default Home;
