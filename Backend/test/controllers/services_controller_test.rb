require "test_helper"

class ServicesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @service = services(:one)
  end

  test "should get index" do
    get services_url, as: :json
    assert_response :success
  end

  test "should create service" do
    assert_difference("Service.count") do
      post services_url, params: { service: { availability: @service.availability, description: @service.description, name: @service.name, price: @service.price, service_category_id: @service.service_category_id, user_id: @service.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show service" do
    get service_url(@service), as: :json
    assert_response :success
  end

  test "should update service" do
    patch service_url(@service), params: { service: { availability: @service.availability, description: @service.description, name: @service.name, price: @service.price, service_category_id: @service.service_category_id, user_id: @service.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy service" do
    assert_difference("Service.count", -1) do
      delete service_url(@service), as: :json
    end

    assert_response :no_content
  end
end
