# Chat Service

## Overview
The Chat Service provides real-time messaging functionality for the GigGlobal platform, enabling communication between buyers and sellers. It supports text messages, file sharing, offer management, and conversation tracking with comprehensive message history.

## Core Functionality
- **Real-time Messaging:** Instant message delivery between buyers and sellers
- **File Sharing:** Support for various file types including documents and ZIP files
- **Conversation Management:** Organized conversation threads with message history
- **Offer System:** Integrated offer creation and management within chat conversations
- **Message Status Tracking:** Read/unread message status and delivery confirmation
- **File Upload Integration:** Cloudinary integration for secure file storage and sharing
- **Conversation Search:** Search functionality across message content and conversations

## Architecture Components

### Messaging Features
- **Text Messages:** Real-time text communication with instant delivery
- **File Attachments:** Support for various file formats with size and type validation
- **Conversation Threads:** Organized message grouping by conversation ID
- **Message Metadata:** Sender/receiver information, timestamps, and status tracking
- **Offer Integration:** Built-in offer creation and acceptance within conversations

### File Management
- **Upload Support:** Secure file upload via Cloudinary integration
- **File Type Validation:** Support for documents, images, ZIP files, and more
- **File Size Management:** Configurable file size limits for performance
- **CDN Distribution:** Global file access through Cloudinary CDN

## API Endpoints

### Message Operations
- **POST** `/message/create` - Send new message with optional file attachments
- **GET** `/message/conversation/:conversationId` - Retrieve all messages in conversation
- **PUT** `/message/:messageId/read` - Mark specific message as read
- **GET** `/message/conversations/:userId` - Get all conversations for user

### Conversation Management
- **POST** `/conversation/create` - Create new conversation between users
- **GET** `/conversation/:conversationId` - Get conversation details and metadata
- **PUT** `/conversation/:conversationId/update` - Update conversation settings or status

### File Operations
- **POST** `/message/upload` - Upload file for message attachment
- **GET** `/message/file/:fileId` - Retrieve file information and download link

## Message Data Structure
Comprehensive message information includes:
- **Conversation Details:** Conversation ID, participant information
- **Message Content:** Text body, file attachments, and metadata
- **User Information:** Sender and receiver usernames, profile pictures
- **Gig Context:** Associated gig ID for transaction-related conversations
- **Offer Details:** Integrated offer information for service proposals
- **Status Tracking:** Read status, delivery confirmation, timestamps
- **File Information:** File type, size, filename, and secure URLs

## Message Creation Workflow
1. **Input Validation:** Validate message content, file attachments, and conversation data
2. **File Processing:** Upload and process file attachments via Cloudinary if present
3. **Conversation Check:** Verify or create conversation thread between participants
4. **Message Storage:** Store message content with proper relationships and metadata
5. **Real-time Delivery:** Send message to recipient via WebSocket connection
6. **Status Update:** Update conversation with latest message and read status
7. **Response Generation:** Return message confirmation with conversation details

## File Upload Process
1. **File Validation:** Check file type, size, and format requirements
2. **Security Processing:** Scan and validate file content for security
3. **Cloudinary Upload:** Secure upload to cloud storage with unique identifiers
4. **URL Generation:** Generate secure, accessible URLs for file downloads
5. **Database Storage:** Store file metadata and references in message records
6. **CDN Distribution:** Make files available globally through CDN

## Conversation Management
- **Thread Creation:** Automatic conversation creation for first-time communications
- **Participant Tracking:** Maintain buyer and seller information in conversations
- **Message Ordering:** Chronological message ordering with timestamp accuracy
- **Unread Counts:** Track unread message counts per conversation and user
- **Archive Support:** Conversation archiving and retrieval functionality

## Development Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   ```env
   NODE_ENV=development
   API_GATEWAY_URL=http://localhost:4000
   DATABASE_URL=postgresql://user:password@localhost:5432/gigglobal_chat
   ELASTIC_SEARCH_URL=http://localhost:9200
   RABBITMQ_ENDPOINT=amqp://localhost
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

3. Start the service:
   ```bash
   npm run dev
   ```

## Project Structure
```
src/
├── app.ts                    # Application entry point with Cloudinary and database setup
├── server.ts                # Server configuration with middleware and routing
├── config.ts                # Environment configuration and Cloudinary setup
├── database.ts              # Database connection and configuration
├── elasticsearch.ts         # Elasticsearch connection for message search
├── error-handler.ts         # Centralized error handling middleware
├── route.ts                 # Route aggregation and middleware application
├── controllers/             # Request handlers for chat operations
│   ├── create.ts           # Message creation and file upload logic
│   ├── get.ts              # Message and conversation retrieval operations
│   ├── update.ts           # Message status and conversation updates
│   ├── health.ts           # Health check endpoints
│   └── test/               # Test controllers for development
├── models/                 # Database models and schemas
│   ├── message.schema.ts   # Message database model with file support
│   └── conversation.schema.ts # Conversation thread model
├── routes/                 # Route definitions for chat operations
│   ├── message.ts          # Message-related routes
│   ├── conversation.ts     # Conversation management routes
│   └── health.ts           # Health check routes
├── schemes/                # Input validation schemas
│   ├── message.ts          # Message creation and update validation
│   └── conversation.ts     # Conversation validation rules
├── services/               # Business logic and data operations
│   ├── message.service.ts  # Message management service methods
│   └── conversation.service.ts # Conversation handling service methods
└── queues/                 # Message queue integration
    ├── connection.ts       # RabbitMQ connection management
    └── chat.producer.ts    # Chat event publishing for notifications
```

## Real-time Integration
- **WebSocket Support:** Integration with Gateway Service for real-time message delivery
- **Event Broadcasting:** Publish message events for real-time UI updates
- **Online Status:** User presence tracking for conversation participants
- **Typing Indicators:** Real-time typing status for active conversations
- **Message Delivery:** Instant message delivery confirmation and status

## Security Features
- **File Validation:** Comprehensive file type and content validation
- **Access Control:** Conversation access limited to participants only
- **Content Filtering:** Basic content moderation and filtering capabilities
- **Secure File URLs:** Time-limited and secure file access URLs
- **Privacy Protection:** Message encryption and secure data handling

## Integration Points
- **Gateway Service:** Real-time WebSocket communication and request routing
- **Auth Service:** User authentication and authorization for message access
- **Users Service:** Retrieve user profile information for conversations
- **Gig Service:** Associate conversations with specific gig transactions
- **Order Service:** Link conversations to order discussions and updates
- **Notification Service:** Send email notifications for important messages

---
