const not_found_handler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: `Ruta no encontrada - Not Found ${req.method} - ${req.url}`
    })
}
export default not_found_handler