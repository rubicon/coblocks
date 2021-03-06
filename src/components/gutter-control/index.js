/**
 * WordPress Dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { hasBlockSupport, getBlockSupport } from '@wordpress/blocks';

addFilter(
	'blocks.registerBlockType',
	'coblocks/GutterControl/attributes',
	addAttributes
);

function addAttributes( settings, name ) {
	if ( ! name.startsWith( 'coblocks/' ) ) {
		return settings;
	}

	if ( ! hasBlockSupport( settings, 'gutter', false ) ) {
		return settings;
	}

	const supportOverride = getBlockSupport( settings, 'gutter', false );

	settings.attributes = {
		...settings.attributes,
		gutter: {
			type: 'string',
			default: supportOverride.default || 'small',
		},
		gutterCustom: {
			type: 'string',
			default: supportOverride.customDefault?.toString() || '3',
		},
	};

	return settings;
}
