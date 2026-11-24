import React from 'react'
import { propertyCardStyles as s } from "../../assets/dummyStyles"
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({
    property,
    renderActions,
    isWishlisted,
    onToggleWishlist,
}) => {
    if(!property) return null;

    const { user} = useAuth();
    const navigate = useNavigate();

    //for wishlist click
    const handleWishlistClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if(!user){
            navigate("/login");
            return;
        }
    }
  return (
    <div>PropertyCard</div>
  )
}

export default PropertyCard