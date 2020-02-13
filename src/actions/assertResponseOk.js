export default response => {
    if (response.status !== 200) {
        throw new Error('Bad request')
    }
}