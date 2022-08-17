import {useState, useCallback}  from 'react';
import {useProvider} from 'wagmi';


function useBalance(accountAddress) {
    const [balance, setBalance] = useState(0);
    const provider = useProvider();
    
}
