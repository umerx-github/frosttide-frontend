import { AccountAlpacaTable } from "../interfaces/AccountAlpacaTable";

const AccountCard = ({ account }: { account: AccountAlpacaTable }) => {
	return (
		<>
			<div
				style={{
					border: "1px solid #ccc",
					padding: "10px",
					margin: "10px",
				}}
			>
				<p>Account ID: {account.id}</p>
				<p>Platform Account ID: {account.platformAccountId}</p>
				<p>Platform API Key: {account.platformAPIKey}</p>
			</div>
		</>
	);
};

export default AccountCard;
