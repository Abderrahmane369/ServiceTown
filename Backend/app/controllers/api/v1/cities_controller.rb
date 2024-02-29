class Api::V1::CitiesController < ApplicationController
  before_action :set_city, only: %i[ show update destroy ]

  # GET /cities
  def index
    @cities = City.all
    cities_hash = @cities.as_json
    cities_hash.each do |city|
      city['id'] = city['uuid']
      city.delete('uuid')
    end
    render json: cities_hash
  end

  # GET /cities/<uuid>
  def show
    city = @city.as_json
    city['id'] = city['uuid']
    city.delete('uuid')
    render json: city
  end

  # POST /cities
  def create
    @city = City.new(city_params)

    if @city.save
      render json: @city, status: :created, location: @city
    else
      render json: @city.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cities/<uuid>
  def update
    if @city.update(city_params)
      render json: @city
    else
      render json: @city.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cities/<uuid>
  def destroy
    @city.destroy!
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_city
      #@city = City.find(params[:id])
      @city = City.find_by(uuid: params[:uuid])
    end


    # Only allow a list of trusted parameters through.
    def city_params
      params.require(:city).permit(:name)
    end
end
