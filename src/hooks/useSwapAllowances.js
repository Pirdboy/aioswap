import { useState, useEffect } from "react";
import { UNISWAP_V2_ROUTER02_ADDRESS } from "../constants/Uniswap";
import { SUSHISWAP_ROUTER_ADDRESS } from "../constants/Sushiswap";
import { UNISWAP_V2_NAME, SUSHISWAP_NAME } from "../constants/DexName";
import { TokenBalanceZero } from "../utils/TokenBalance";
import { getERC20Allowance } from "../utils/EthersWrap";

function useSwapAllowances(token, isConnected, account) {
    const [allowances, setAllowances] = useState({
        [UNISWAP_V2_NAME]: TokenBalanceZero,
        [SUSHISWAP_NAME]: TokenBalanceZero,
    });
    const [forceUpdateAllowance, setForceUpdateAllowance] = useState(false);

    useEffect(() => {
        const fetchTokenAllowance = async () => {
            if(!isConnected) {
                return;
            }
            if(token.symbol === 'ETH') {
                return;
            }
            let uni = await getERC20Allowance(account, token, UNISWAP_V2_ROUTER02_ADDRESS);
            let sushi = await getERC20Allowance(account, token, SUSHISWAP_ROUTER_ADDRESS);
            setAllowances({
                [UNISWAP_V2_NAME]: uni,
                [SUSHISWAP_NAME]: sushi
            });
        };
        fetchTokenAllowance();
    }, [token, isConnected, account])

    // forceUpdate, 当token,isConnected,account没有发生变化时仍然需要更新
    // 因此要单独写一个effect
    useEffect(() => {
        const fetchTokenAllowance = async () => {
            if(!isConnected) {
                return;
            }
            if(token.symbol === 'ETH') {
                return;
            }
            if(!forceUpdateAllowance) {
                return;
            }
            let uni = await getERC20Allowance(account, token, UNISWAP_V2_ROUTER02_ADDRESS);
            let sushi = await getERC20Allowance(account, token, SUSHISWAP_ROUTER_ADDRESS);
            setAllowances({
                [UNISWAP_V2_NAME]: uni,
                [SUSHISWAP_NAME]: sushi
            });
        };
        fetchTokenAllowance();
    }, [forceUpdateAllowance])

    return {
        allowances, setForceUpdateAllowance
    }
}

export default useSwapAllowances;