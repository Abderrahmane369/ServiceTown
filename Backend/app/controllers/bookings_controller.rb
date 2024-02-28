class BookingsController < ApplicationController
  before_action :set_booking, only: %i[ show update destroy ]

  # GET /bookings
  def index
    @bookings = Booking.all
    bookings_hash = @bookings.as_json
    bookings_hash.each do |booking|
      booking['id'] = booking['uuid']
      booking.delete('uuid')
    end
    render json: bookings_hash
  end

  # GET /bookings/1
  def show
    booking = @booking.as_json
    booking['id'] = booking['uuid']
    booking.delete('uuid')
    render json: booking
  end

  # POST /bookings
  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render json: @booking, status: :created, location: @booking
    else
      render json: @booking.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bookings/1
  def update
    if @booking.update(booking_params)
      render json: @booking
    else
      render json: @booking.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bookings/1
  def destroy
    @booking.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_booking
      @booking = Booking.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def booking_params
      params.require(:booking).permit(:service_id, :user_id)
    end
end
