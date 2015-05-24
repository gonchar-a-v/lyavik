function addEventSimpleImageUpload(imageUploadId,imageUploadNum){

	new AjaxUpload(imageUploadId, {
		action: 'index.php?route=common/filemanager/upload&token='+$("#token_id").val(),
		name: 'image',
		autoSubmit: true,
		responseType: 'json',

		onChange: function(file, extension) {
			var product_id = $('#product_id').val()+"-"+imageUploadNum;
			$('#input-image'+imageUploadNum).attr('value','catalog/'+product_id+'.'+extension);
			this.setData({'directory': 'products','newFileName': product_id+'.'+extension});
			this.submit();
		},

		onSubmit: function(file, extension) {
			$('#upload').append('<img src="view/image/loading.gif" class="loading" style="padding-left: 5px;" />');
		},
		onComplete: function(file, json) {
			if (json.success) {
				$.ajax({
					url: 'index.php?route=common/filemanager/image&token='+$("#token_id").val()+'&image=' + encodeURIComponent($('#input-image'+imageUploadNum).attr('value')),
					dataType: 'text',
					success: function(text) {
						$("a#thumb-image"+imageUploadNum).find('img').attr('src',text+'?'+new Date().getTime());
					}
				});
			}
			if (json.error) {
				alert(json.error);
			}
		}
	});
}

$(document).ready(function() {
	if ($('#product_id').val()){
		$("#input-image").parent(".image").css("width","241px").find("#speed-upload").wrap('<div id="simple-image-upload"></div>');
		new AjaxUpload('simple-image-upload', {
			action: 'index.php?route=common/filemanager/upload&token='+$("#token_id").val(),
			name: 'image',
			autoSubmit: true,
			responseType: 'json',

			onChange: function(file, extension) {
				var product_id = $('#product_id').val();
				$('#input-image').attr('value','catalog/'+product_id+'.'+extension);
				this.setData({'directory': 'products','newFileName': product_id+'.'+extension});
				this.submit();
			},

			onSubmit: function(file, extension) {
				$('#upload').append('<img src="view/image/loading.gif" class="loading" style="padding-left: 5px;" />');
			},
			onComplete: function(file, json) {
				if (json.success) {
					$.ajax({
						url: 'index.php?route=common/filemanager/image&token='+$("#token_id").val()+'&image=' + encodeURIComponent($('#input-image').attr('value')),
						dataType: 'text',
						success: function(text) {
							$('#thumb').attr('src',text+'?'+new Date().getTime());
						}
					});
				}

				if (json.error) {
					alert(json.error);
				}
			}
		});

	};
	if ($('#product_id').val()){
		var imageNum = 0;
		$("table#images").children("tbody").each(function(){
			$(this).find(".img-thumbnail>img").wrap('<div id="simple-image-upload-'+imageNum+'"></div>');
			addEventSimpleImageUpload('simple-image-upload-'+imageNum,imageNum);
			imageNum++;
		});
		$("table#images>tfoot button").on("click",function(){
			var imageNum = image_row - 1;
			$("table#images").children("tbody:last").find(".img-thumbnail>img").wrap('<div id="simple-image-upload-'+imageNum+'"></div>');
			addEventSimpleImageUpload("simple-image-upload-"+imageNum,imageNum);
		});
	};
});
