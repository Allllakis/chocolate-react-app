import classes from './MealsSummary.module.css'

const MealsSummary = props => {
    return (
        <section className={classes.summary}>
            <h2>Delicious coffee and chocolate, Delivered to You</h2>
            <p>Chouse your favorite coffe and chocolate</p>
            <p>All our chocolate are cooked with high-quality ingredients</p>
        </section>
    )
}

export default MealsSummary;