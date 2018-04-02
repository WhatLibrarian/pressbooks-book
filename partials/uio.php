<div class="flc-prefsEditor-separatedPanel fl-prefsEditor-separatedPanel">
	<div class="flc-slidingPanel-panel flc-prefsEditor-iframe"></div>
	<div class="fl-panelBar">
		<span class="fl-prefsEditor-buttons">
			<button id="reset" class="flc-prefsEditor-reset fl-prefsEditor-reset"><span class="fl-icon-undo"></span> <?php _e( 'Reset', 'pressbooks-book' ); ?></button>
			<button id="show-hide" class="flc-slidingPanel-toggleButton fl-prefsEditor-showHide"> <?php _e( 'Show/Hide', 'pressbooks-book' ); ?></button>
		</span>
	</div>
</div>
<script type="text/javascript">
	jQuery(document).ready(function () {
		fluid.uiOptions.prefsEditor(".flc-prefsEditor-separatedPanel", {
			tocTemplate: "<?php echo get_template_directory_uri(); ?>/lib/uio/toc/html/TableOfContents.html",
			terms: {
				templatePrefix: "<?php echo get_template_directory_uri(); ?>/lib/uio/preferences/html",
				messagePrefix: "<?php echo get_template_directory_uri(); ?>/lib/uio/preferences/messages"
			}
		});
	})
</script>
