function App() {
	return (
		<div style={
			{
				background: "#dfe6e9",
				height: "100vh"
			}
		}>
			<div style={
				{
					display: "flex",
					justifyContent: "center"
				}
			}>
				<PostComponent name={"Mehir"}
					followerCount={"53,456"}
					time={"15m"}
					image={"https://media.licdn.com/dms/image/v2/D4E03AQHOlXfaN1DDRw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726586797040?e=1753315200&v=beta&t=Cfthp8erdQMh6fgABUqioYKWThI6cxZpOGRy7KW4Lo0"}
					description={"Want to know how to win big? Check out these folks won $6000 in bounties."}/>
			</div>
		</div>
	)
}

const style = {
	width: 200,
	backgroundColor: "white",
	borderRadius: 10,
	borderColor: "gray",
	borderWidth: 1,
	padding: 20,
	margin: 10
}

function PostComponent({
	name,
	followerCount,
	time,
	image,
	description
}) {
	return (
		<div style={style}>
			<div style={
				{display: "flex"}
			}>
				<img src={image}
					style={
						{
							width: 30,
							height: 30,
							borderRadius: 20
						}
					}/>
				<div style={
					{
						fontSize: 10,
						marginLeft: 10
					}
				}>
					<b> {name} </b>
					<div>{followers}</div>
					<div>{time}</div>
				</div>
			</div>
			<div style={
				{fontStyle: 12}
			}>
				{description} </div>
		</div>
	);
}


export default App
