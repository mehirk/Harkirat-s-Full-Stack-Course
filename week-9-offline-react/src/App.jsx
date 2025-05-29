import React from 'react';

const Card = ({ children }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
            {children}
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Card>
                <h2>Card Title</h2>
                <p>This is some content inside the card.</p>
            </Card>
            <Card>
                <h2>Another Card</h2>
                <p>This card has different content!</p>
            </Card>
        </div>
    );
};

export default App;


// function App() {
//     const [currentTab, setCurrentTab] = useState(1);
//     const [tabData, setTabData] = useState({});
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setLoading(true);
//         fetch(`https://jsonplaceholder.typicode.com/posts/${currentTab}`)
//             .then(async res => {
//                 const json = await res.json();
//                 setTabData(json);
//                 setLoading(false);
//             })
//     }, [currentTab]);

//     return <div>
//         <button onClick={() => setCurrentTab(1)} style={{ color: currentTab == 1 ? "red" : "black" }}>Todo #1</button>
//         <button onClick={() => setCurrentTab(2)} style={{ color: currentTab == 2 ? "red" : "black" }}>Todo #2</button>
//         <button onClick={() => setCurrentTab(3)} style={{ color: currentTab == 3 ? "red" : "black" }}>Todo #3</button>
//         <button onClick={() => setCurrentTab(4)} style={{ color: currentTab == 4 ? "red" : "black" }}>Todo #4</button>
//         <br />
//         {loading ? "Loading..." : tabData.title}
//     </div>
// }

// export default App






// import { PostComponent } from "./Posts";

// function App() {

//     const [posts, setPosts] = useState([])

//     const postComponents = posts.map(post => <PostComponent
//         name={post.name}
//         subtitle={post.subtitle}
//         time={post.time}
//         image={post.image}
//         description={post.description}
//     />)

//     function addPost() {
//         setPosts([...posts, {
//             name: "mehir",
//             subtitle: "10,000 followers",
//             time: "2m ago",
//             image: "https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
//             description: "Want to know how to win big? Check out how these folks won $6000 in bounties."

//         }])
//     }

//     return (
//         <div style={{ background: "#dfe6e9", height: "100vh", }}>
//             <button onClick={addPost}>Add Post</button>
//             <div style={{ display: "flex", justifyContent: "center" }}>
//                 <div>
//                     {postComponents}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default App