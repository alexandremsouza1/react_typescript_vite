import classNames from 'classnames';
import React, { useEffect } from 'react';
import Button, { ButtonProps } from './Button/Button';

export interface ModalProps {
	okText?: string;
	closeText?: string;
	isOpen?: boolean;
	onClose?: () => void;
	onOke?: () => void;
	isBtnOkeLoading?: boolean;
	buttonOkeForForm?: string;
	title?: string;
	children?: React.ReactNode;
}
export default function Modal(props: ModalProps) {
	const {
		title,
		isOpen,
		children,
		okText = 'Save changes',
		closeText = 'Close',
		buttonOkeForForm,
		onClose,
		onOke,
		isBtnOkeLoading,
	} = props;
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('modal-open');
		} else {
			document.body.classList.remove('modal-open');
		}
		return () => {
			document.body.classList.remove('modal-open');
		};
	}, [isOpen]);
	return (
		<div
			style={{
				display: isOpen ? 'block' : 'none',
				backgroundColor: 'rgba(0,0,0,.5)',
			}}
			className={classNames('modal fade', {
				show: isOpen,
			})}
			tabIndex={-1}
			aria-modal="true"
			role="dialog"
		>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">{title}</h5>
						<button
							onClick={onClose}
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">{children}</div>
					<div className="modal-footer">
						<Button htmlType="button" onClick={onClose} className="btn btn-secondary">
							{closeText}
						</Button>
						<Button
							form={buttonOkeForForm}
							htmlType={buttonOkeForForm ? 'submit' : 'button'}
							isLoading={isBtnOkeLoading}
							onClick={onOke}
							className="btn btn-primary"
						>
							{okText}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
