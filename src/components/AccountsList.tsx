import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { AccountAlpacaTable } from "../interfaces/AccountAlpacaTable";
import AccountCard from "./AccountCard";

const Account = () => {
	const dispatch: AppDispatch = useDispatch();
	const accounts: AccountAlpacaTable[] = useSelector((state: RootState) =>
		Array.from([...state.accounts.values()])
	);

	return (
		<div>
			<h1>Accounts</h1>
			<div>
				{accounts.map((account: AccountAlpacaTable) => (
					<AccountCard key={account.id} account={account} />
				))}
			</div>
		</div>
	);
};
export default Account;
