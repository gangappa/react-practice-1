import styles from '../assets/css/custom.module.css'

export default function Students(props) {
    return (
        <div>
            <h1 className={styles.sample}>This is students module</h1>
            <ol>
            {
                props.data.map((item) => 
                    <li key={item.id}>{item.name}</li>
                )
            }
            </ol>
        </div>
    )
}