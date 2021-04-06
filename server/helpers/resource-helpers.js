module.exports = {
    buildWrestler: (wrestler) => ({
        id: wrestler.uuid,
        ring_name: wrestler.ring_name,
        slug: wrestler.slug,
        active: wrestler.active,
    }),
    buildPromotion: (promotion) => ({
        id: promotion.uuid,
        name: promotion.name,
        alias: promotion.alias
    }),
}