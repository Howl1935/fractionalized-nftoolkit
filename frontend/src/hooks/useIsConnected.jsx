import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';

export const useIsConnected = () =>{
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true);
    const {nfts} = useSelector(state => state.covalent);

    useEffect(()=>{
        console.log("HIIII")
        if(nfts !== null){
            console.log('nice!')
            setLoggedIn(true);
        }else{
            setLoggedIn(false);
        }
        setCheckingStatus(false);
    },[nfts])

    return { loggedIn, checkingStatus }
}