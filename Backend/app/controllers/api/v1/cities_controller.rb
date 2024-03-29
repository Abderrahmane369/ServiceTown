class Api::V1::CitiesController < ApplicationController
  before_action :set_city, only: %i[ show update destroy ]

  # GET /cities/<uuid>/services
  def show_services
    @city = City.find_by(uuid: params[:uuid])
    if @city
      services_hash = @city.services.as_json
      services_hash.each do |service|
        service['id'] = service['uuid']
        service.delete('uuid')
      end
      render json: services_hash
    else
      render json: {error: 'City not found'}, status: :not_found
    end
  end

  # GET /cities/<uuid>/services/<service_uuid>
  def show_service
    @city = City.find_by(uuid: params[:uuid])
    service = @city.services.find_by(uuid: params[:service_uuid])
    render json: service
  end


  # GET /cities
  def index
    @cities = City.all
    cities_hash = @cities.as_json

    render json: cities_hash
  end

  # GET /cities/<uuid>
  def show
    if @city
      city = @city.as_json

      render json: city
    else
      render json: {error: 'City not found'}, status: :not_found
    end
  end

  # POST /cities
  def create
    @city = City.new(city_params)

    if @city.save
      render json: @city, status: :created, location: api_v1_city_url(@city)
    else
      render json: @city.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cities/<uuid>
  def update
    if @City
      if @city.update(city_params)
        render json: @city
      else
        render json: @city.errors, status: :unprocessable_entity
      end
    else
      render json: {error: 'City not found'}, status: :not_found
    end
  end

  # DELETE /cities/<uuid>
  def destroy
    if @city
      @city.destroy!
    else
      render json: {error: 'City not found'}, status: :not_found
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_city
      @city = City.find_by(uuid: params[:uuid])
    end


    # Only allow a list of trusted parameters through.
    def city_params
      params.require(:city).permit(:name)
    end
end
