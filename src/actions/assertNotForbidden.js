import ForbiddenError from '../exceptions/ForbiddenError';

export default response => {
    if (response.status === 403)
        throw new ForbiddenError('Forbidden')
}