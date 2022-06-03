import { Grid } from '@material-ui/core';
import useStyles from '../List/styles';
import { useState , useEffect , createRef} from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const Bookmark = ({addBM, deleteBookmark , bookmarks}) => {

    console.log("bookmarks", bookmarks);
    const [places, setPlaces] = useState([]);
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        const refs = Array(places?.length)
        .fill()
        .map((_, i) => elRefs[i] || createRef());

        setElRefs(refs);
        const storedPlaces = JSON.parse(localStorage.getItem('bookmarks'));
        console.log("places stored in local storage: ", storedPlaces);
        setPlaces(storedPlaces);

    },[places , elRefs]);

    return ( 
        <>
            {bookmarks && <h1 style={{'margin':'20px'}}>Your Bookmarks</h1>}
            <div style={{'maxWidth':'410px' , 'margin':'20px'}}>
                <Grid container spacing={3} className={classes.list}>
                {places?.map((place, index) => (
                    <Grid item key={index} xs={12}>
                        <PlaceDetails
                            // addBM={addBM}
                            place={place}
                            refProp={elRefs[index]}
                            deleteBookmark = {deleteBookmark}
                            isBookmarked = {false}
                        />
                    </Grid>
                ))}
                </Grid>
            </div>
        </>
    );
}

export default Bookmark;