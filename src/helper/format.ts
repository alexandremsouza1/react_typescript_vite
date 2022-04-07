export const formatDateIsoTOLocal = (dateString: string): string => {
	return new Date(dateString).toLocaleString('vi').split(',').join(' ');
};
