/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'coblocks/field-name', 'coblocks/field-date', 'coblocks/field-textarea', 'coblocks/field-phone', 'coblocks/field-text', 'coblocks/field-hidden' ],
			transform: ( attributes, innerBlocks ) => {
				return createBlock( 'coblocks/field-website', {
					label: __( 'Website', 'coblocks' ),
				}, innerBlocks );
			},
		},
	],
};

export default transforms;
