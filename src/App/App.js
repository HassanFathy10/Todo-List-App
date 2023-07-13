import React, {useState} from 'react';
import styles from './App.module.css';
import Filter from '../components/filter/Filter';
import CardList from '../components/Cardlist/cardList';
import Modal from '../components/Modal/Modal';

const App = () => {
    // const inputEl = useRef(null);
    const [cardToggle, setCardToggle] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [filter, setfilter] = useState("");
    const [state, newState] = useState([{
        id: 1,
        name: "hassan",
        Age: 24,
        phone: "01143814036",
        type : "boy"
    },
    {
        id: 2,
        name: "yasmeen",
        Age: 25,
        phone: "013565659494",
        type: "girl"
    },
    {
        id: 3,
        name: "kareem",
        Age: 22,
        phone: "013565655",
        type : "boy"
    },
    {
        id: 4,
        name: "jessy",
        Age: 21,
        phone: "013565652494",
        type : "girl"
    },
    ]);
    const deleteHandeler = (e, selectedId) => {
        // const deleteOberation = state.filter((e, index) => (index !== clickedIndex));
        // newState(deleteOberation);
        
        newState((prevState) => {
            return prevState.filter((el) => (el.id !== selectedId));
        });
        console.log("inside", state); // old info
    };
    console.log("outside", state); // new info

    const toggleHandler = () => setCardToggle(!cardToggle) ;
    
    // const testHandler = () => console.log(inputEl.current.value);
    
    // const onClick = ()=> inputEl.current.focus();
    const namesFilter = (names) => {
        setfilter(names);
    };

    const namesHandler = () => {
        if (filter.length !== 0) {
            return state.filter((el) => el.name.includes(filter));
        }
        return state;
    };
    return (
    <div className={styles.main}>
        <Modal show={showModal} hide={() => setShowModal(false)}></Modal>
            <h1>List of Data</h1>
            <div style={{ "display" : "flex", "justifyContent" : "center" ,"width" : "20%" }}>
                <button className={styles.button} onClick={toggleHandler}>{cardToggle ? "Hide Names" : "Show Names"}</button>
                <button style={{ "marginLeft": "20%" }} className={styles.button} onClick={()=> setShowModal(true)}>New Record</button>
            </div>
        <div style={{ "paddingTop": "10px" }} className={cardToggle ? styles.show : styles.hide}>
            <Filter filteration={namesFilter}></Filter>
        <CardList namesList={namesHandler()} type="boy" deleteFunc={deleteHandeler}></CardList>
        </div>
    </div>
)}

export default App;
