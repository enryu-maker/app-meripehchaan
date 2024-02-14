import React from 'react'
import { IMAGE } from '../../Components/Image';
import { useDispatch, useSelector } from 'react-redux';
import { GetCardAction } from '../../Store/actions';
import { ThreeDots } from 'react-loader-spinner';
import { useLocation } from 'react-router-dom';
import { development_imgurl } from '../../Helper/Helper';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SimpleCard from './SimpleCard';
import ModernCard from './ModernCard';
import ArtCard from './ArtCard';
export default function View() {
    const location = useLocation()
    const uid = location.pathname.split('/')[2]
    const token = location.pathname.split('/')[3]
    const name = location.pathname.split('/')[4]
    const card = useSelector(state => state.Reducers.card);
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(GetCardAction(setLoading, uid, token, name))
    }, [])
   
    function showCard(id){
        switch(id){
            case 0:
                return <SimpleCard card={card}/>
            case 1:
                return <ModernCard card={card}/>
            case 2:
                return <ArtCard card={card}/>
        }
    }
    return (
        <>
        {showCard(card?.template)}
        </>
    )
}
