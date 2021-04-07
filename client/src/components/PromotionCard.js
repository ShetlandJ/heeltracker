function PromotionCard(props) {
    return (
        <div>
            <img
                src={`${process.env.PUBLIC_URL}${props.promotion.image_url}`}
                alt="Logo"
            />;
        </div>
    )
}

export default PromotionCard;