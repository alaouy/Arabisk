(function($) {

	$.fn.arabisk = function() {
		
		function transcribe () {
				var content = this.value;
				content = content.replace(/’/g, "\'");
				content = content.replace(/[aâàā]/g, "ا");
				content = content.replace(/اا/g, "آ");
				content = content.replace(/b/g, "ب");
				content = content.replace(/ب'/g, "پ");
				content = content.replace(/p/g, "پ");
				content = content.replace(/t/g, "ت");
				content = content.replace(/ت'/g, "ث");
				content = content.replace(/ṯ/g, "ث");
				content = content.replace(/[jǧ]/g, "ج");
				content = content.replace(/ج'/g, "چ");
				content = content.replace(/c/g, "چ");
				content = content.replace(/[HḥḤ]/g, "ح");
				content = content.replace(/ح'/g, "خ");
				content = content.replace(/[xẖK]/g, "خ");
				content = content.replace(/d/g, "د");
				content = content.replace(/د'/g, "ذ");
				content = content.replace(/ḏ/g, "ذ");
				content = content.replace(/r/g, "ر");
				content = content.replace(/ر'/g, "ز");
				content = content.replace(/z/g, "ز");
				content = content.replace(/s/g, "س");
				content = content.replace(/س'/g, "ش");
				content = content.replace(/š/g, "ش");
				content = content.replace(/[Sṣ]/g, "ص");
				content = content.replace(/ص'/g, "ض");
				content = content.replace(/[Dḍ]/g, "ض");
				content = content.replace(/[Tṭ]/g, "ط");
				content = content.replace(/ط'/g, "ظ");
				content = content.replace(/[Zẓ]/g, "ظ");
				content = content.replace(/[gʿ]/g, "ع");
				content = content.replace(/ع'/g, "غ");
				content = content.replace(/ġ/g, "غ");
				content = content.replace(/f/g, "ف");
				content = content.replace(/ف'/g, "ڤ");
				content = content.replace(/v/g, "ڢ");
				content = content.replace(/q/g, "ق");
				content = content.replace(/ق'/g, "ڨ");
				content = content.replace(/k/g, "ك");
				content = content.replace(/ك'/g, "ڭ");
				content = content.replace(/l/g, "ل");
				content = content.replace(/m/g, "م");
				content = content.replace(/n/g, "ن");
				content = content.replace(/h/g, "ه");
				content = content.replace(/ه'/g, "ة");
				content = content.replace(/[wouôûōū]/g, "و");
				content = content.replace(/[yieîī]/g, "ي");
				content = content.replace(/[YIE]/g, "ى");
				content = content.replace(/-/g, "ء");
				content = content.replace(/ʾ/g, "ء");
				content = content.replace(/وءء/g, "ؤ");
				content = content.replace(/يءء/g, "ئ");
				content = content.replace(/اءء/g, "إ");
				content = content.replace(/I/g, "إ");
				content = content.replace(/A/g, "إ");
				content = content.replace(/ءا/g, "أ");
				content = content.replace(/_/g, "ـ");
				content = content.replace(/\?/g, "؟");
				content = content.replace(/\;/g, "؛");
				content = content.replace(/\,/g, "،");
				this.value = content;
				this.focus();
			}
		
		// to enable action chaining
		return this.each(function() {

			// align text right to left
			this.dir = "rtl";

			// attach the keyup event to the element
			$(this).on("keyup", transcribe);
		});
	}

}(jQuery));