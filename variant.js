onVariantChange() {
  this.updateOptions();
  this.updateOptionsParent();
  this.updateMasterId();
  this.toggleAddButton(true, "", false);
  this.getPreOrderVariantData();
  this.updatePickupAvailability();
  this.updateContent();
  this.filterImgVariant();
  if (!this.currentVariant) {
    this.toggleAddButton(true, "", true);
    this.setUnavailable();
  } else {
    this.updateMedia();
    this.updateURL();
    this.updateVariantInput();
    this.renderProductInfo();
  }
}
filterImgVariant() {
    var provarid = this.currentVariant.id;
    console.log(provarid);
    var text = $('.variant_meta .variant_meta_data[data-varid="' + provarid + '"] .dimensions').html();
    if (!text || text.trim().length === 0) {
      $('.variant_meta .variant_meta_data').hide();
      $('.variant_meta .variant_meta_data[data-varid="' + provarid + '"]').parents('.product__accordion').hide();
    }
  else{
    $('.variant_meta .variant_meta_data[data-varid="' + provarid + '"]').parents('.product__accordion').show();
    $('.variant_meta .variant_meta_data').hide();
    $('.variant_meta .variant_meta_data[data-varid="' + provarid + '"]').show();
  }
} 

/**** add this in theme.liquid ***/
 $(document).ready(function() {
  var provarid = $('input#variant_id').val();
  var text = $('.variant_meta .variant_meta_data[data-varid="' + provarid + '"] .dimensions').html();
      if (!text || text.trim().length === 0) {
        $('.variant_meta .variant_meta_data').hide();
        $('.variant_meta .variant_meta_data[data-varid="' + provarid + '"]').parents('.product__accordion').hide();
      }
    else{
      $('.variant_meta .variant_meta_data[data-varid="' + provarid + '"]').parents('.product__accordion').show();
      $('.variant_meta .variant_meta_data').hide();
      $('.variant_meta .variant_meta_data[data-varid="' + provarid + '"]').show();
    }
});
